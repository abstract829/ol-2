# Install dependencies only when needed
FROM node:alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install --frozen-lockfile

# Rebuild the source code only when needed
FROM node:alpine AS builder
WORKDIR /app
# Copy src files
COPY pages/ /app/pages
COPY src/ /app/src
COPY styles/ /app/styles
COPY public/ /app/public
COPY .eslintrc.json index.html next.config.js tsconfig.json package.json /app/

COPY --from=deps /app/node_modules ./node_modules
ARG NODE_ENV=prod
RUN echo ${NODE_ENV}

# Replace redirect url in Auth0Config file
RUN sed -i 's|http://localhost:3000|https://dev.onlylabs.io/app|g' /app/src/utils/Auth0Config.ts

RUN NODE_ENV=${NODE_ENV} npm run build

# Production image, copy all the files and run next
FROM node:alpine AS runner
WORKDIR /app
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

# You only need to copy next.config.js if you are NOT using the default configuration
COPY --from=builder /app/next.config.js ./next.config.js
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/pages ./pages

USER nextjs

# Expose
EXPOSE 3000

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry.
ENV NEXT_TELEMETRY_DISABLED 1
CMD ["npm", "start"]