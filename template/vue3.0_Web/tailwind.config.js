module.exports = {
  purge: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  variants: {
    extend: {
      borderWidth:['hover','focus']
    }
  },
  theme: {
    spacing: exportPxirelUnit([
      1,2,5,10,12,14,16,20,24,25,30,32,38,40,46,47,48,50,56,60,64,65,80,100,164,172
    ]),
    minWidth: exportPxirelUnit([800]),
    fontSize: {
      xs: '12px',
      sm: '14px',
      normal: '16px',
      ls: '18px',
      xl: '20px',
      xxl:'22px',
      xxxl:'24px',
      "36l":'24px',
    },
    backgroundColor: theme => ({
      ...theme("colors"),

    }),
    textColor: theme => ({
      ...theme,
      'standard':'#606266',
      'checked': '#303133',
      'iconColor':'#C0C4CC',
      'green':'#67C23A',
      'blue':'#409EFF',
      'red': '#F56C6C',
      'turmeric': '#E6A23C',
      'lightgreen': '#67C23A',
      'lightorange': '#E6A23C',
      'lightred': '#F56C6C',
      'lightblue': '#409EFF',
    }),
    borderColor: theme => ({
      ...theme("colors"),

      
    }),
    borderRadius: {
      sm:'6px',
      normal:'10px',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

function exportPxirelUnit(array) {
  let obj =  array.reduce((pre, next) => {
    pre[next] = next+'px';
    return pre;
  }, {})
  return obj
}