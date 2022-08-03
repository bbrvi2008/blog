export default ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '22350481a8dfe88ab0c0c9a7c50a55d4'),
  },
});
