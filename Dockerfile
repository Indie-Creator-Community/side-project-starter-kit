FROM node
WORKDIR /app

COPY . ./

RUN npm install -g pnpm
RUN pnpm i
RUN pnpm build

EXPOSE 3000
CMD ["pnpm", "dev"]