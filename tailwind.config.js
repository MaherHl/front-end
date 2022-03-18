module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center : true,
      padding: '5rem'
    },
    extend: {
      colors :{
        "lime":'#75CEF9',
        "blue":'#1878B9',
        "gray": "#5F798D",
        "lightBlue":'#668399',
        "darkBlue":'#045A9C'
      },
      fontFamily: {
        Merienda: ['Merienda '],
        roboto: ['Roboto'],
        roboto2: ['Roboto','Regular']
      },
    
  },

  plugins: [],
}
}