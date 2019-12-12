// let url = 'http://api.estanciadelorenzo.com/';
let url = 'https://educatory-welders.000webhostapp.com/api/api/';
const multiObjToFormData = (form) => {
  const bodyFormData = new FormData();
  const dataKey = Object.keys(form);
  dataKey.forEach(data => {
    typeof form[data] === 'object' ? bodyFormData.set(data, multiObjToFormData(form[data])) : bodyFormData.set(data, form[data])
  });
  return bodyFormData;
};
export default {
  methods: {
    _getData(path){
      return this.$axios.get(url+path)
        .then((response) => {
          return response.data;
        })
        .catch((error) => {
          console.log(error);
        })
    },
    _insertData(path, form){
      const bodyFormData = new FormData();
      bodyFormData.set('data', JSON.stringify(form));
      return this.$axios({
        method  : "post",
        url     : url+path,
        data    : bodyFormData,
      }).then(response => {
          return response.data;
        })
        .catch(err => {
          console.log(err);
        })
    }
  }
}
