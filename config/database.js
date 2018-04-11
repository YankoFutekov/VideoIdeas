if(process.env.NODE_ENV === 'production'){
  module.exports = { mongoURI: 'mongodb://Yanko:wolverin3@ds241869.mlab.com:41869/videos-prod'}
} else {
  module.exports = { mongoURI: 'MongoDB://localhost/videos-dev'}
}