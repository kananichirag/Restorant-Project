const firebaseAdmin = require("firebase-admin");
const { v4: uuidv4 } = require("uuid");
const { initializeApp, cert } = require("firebase-admin/app");
const { getStorage } = require("firebase-admin/storage");
const serviceAccount = require('../helper/first-2d5b8-firebase-adminsdk-te2gl-84921d03e5.json')
const fs = require('fs');

initializeApp({
    credential: cert(serviceAccount),
  });

  const bucket = getStorage().bucket("gs://first-2d5b8.appspot.com");

  module.exports = {
        Upload: async (image) => {
      return new Promise(async (res, rej) => {
        try {
          let uploaded = bucket.upload(image.path, {
            public: true,
            destination: `images/${Math.random() * 10000 + image.filename}`,
            metadata: {
              firebaseStorageDownloadTokens: uuidv4(),
            },
          });
          let data = await uploaded;
          if (data) {
            res({
              status: 200,
              data: {
                mediaLink: data[0].metadata.mediaLink,
                name: data[0].metadata.name,
              },
            });
          }
        } catch (err) {
            console.log("err",err);
          rej({ status: 500, error: err });
        }
      });
    }}