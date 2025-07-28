// const axios = require('axios');
// const FormData = require('form-data');
// const fs = require('fs');

// async function compileDocx(filePath, jsonData, apiKey, endpoint = 'https://your-service-url.com/api/generate') {
//   const form = new FormData();
//   form.append('template', fs.createReadStream(filePath));
//   form.append('data', JSON.stringify(jsonData));

//   try {
//     const response = await axios.post(endpoint, form, {
//       headers: {
//         ...form.getHeaders(),
//         'x-api-key': apiKey,
//       },
//       responseType: 'arraybuffer',
//     });

//     return response.data; // Buffer of the .docx file
//   } catch (err) {
//     const msg = err?.response?.data?.message || err.message;
//     throw new Error(`Failed to compile DOCX: ${msg}`);
//   }
// }

// module.exports = { compileDocx };

export * from './generate';
