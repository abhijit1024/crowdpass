# 1. Use Node.js official image
FROM node:18-slim

# 2. Set working directory
WORKDIR /app

# 3. Copy package files and install dependencies
COPY package.json package-lock.json* pnpm-lock.yaml* ./
RUN npm install

# 4. Copy the rest of the code
COPY . .

# 5. Build the Next.js app
RUN npm run build

# 6. Expose port and run
EXPOSE 3000
CMD ["npm", "start"]
