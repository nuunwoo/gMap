This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# local ssh 적용방법
프로젝트 home에서 실행
```bash
brew install mkcert

mkcert -install

mkcert localhost
```
- localhost.pem
- localhost-key.pem
 
위에 2개의 파일이 생성되며 프로젝트 폴더에 포함되면 'runSSLDev' 로 실행한다.

# 서버 배포 방법
```bash
next build
```
.env.파일에 명시되어 있는 'BUILD_DIR'경로에 빌드 파일이 생성된다.
.env.파일 우선순위는 빌드 당시 상위에 출력된 env 파일이 우선 적용되며 대략적으로 하단과 같이 순위를 갖는다.

- 1 순위 .env.xx.local
- 2 순위 .env.development
- 3 순위 .env.production


1. 개발서버 빌드 배포 경로는 (/dist) 이다.
2. 운영서버 빌드 배포 경로는 (/prodcut) 이다.
