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
        // use Blue, Gray
        "lime":'#75CEF9',
        // "blue":'#1878B9',
        // "gray": "#5F798D",
        "Blue":'#1878B9',
        "Gray": "#5F798D",
        "lightBlue":'#668399',
        "darkBlue":'#045A9C',
        "lightgrey":'#adadad',
        "lightgrey2":'#F4F4F4',
        
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