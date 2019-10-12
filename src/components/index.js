import Box from './Box.vue'
import {Grid, Buttons} from './Table'
import Query from './Query'
// import Uploader from './uploader'
import uSelect from './Select.vue'
import uRadioGroup from './RadioGroup.vue'
import uCheckboxGroup from './CheckboxGroup.vue'
import uInput from './Input.vue'
import {Build, uSection, FormCell, FormBlock} from './Build'
import uText from './Text'
import GenericInput from './Fields'
import './styles/iview.fix.css'
import './styles/common.css'
import List from "./utils/list.js"
import {findParent} from "./utils/utils.js"
import fileupload from './utils/fileupload.js'
// import Chart from './EChart'
// import CKEditor from './Editor/CKEditor'
// import TinyMce from './Editor/TinyMce'
import DatepickerRange from './DatepickerRange.vue'
//third-party plugin
// import uTemplate from "v-runtime-template"
// import VueScrollTo from 'vue-scrollto'
import UploaderFile from './UploaderFile.vue'
import CardList from './CardList'
import Validator from './validator'
import FlatChoices from './FlatChoices.vue'

const Components = {
  Box,
  Grid,
  Buttons,
  Query,
  // Uploader,
  uSelect,
  uRadioGroup,
  uCheckboxGroup,
  Build,
  uSection,
  uText,
  uInput,
  FormCell,
  FormBlock,
  GenericInput,
  // Chart,
//   ckeditor: CKEditor
  // tinymce: TinyMce,
  DatepickerRange,
  // uTemplate,
  UploaderFile,
  CardList,
  FlatChoices
}

const install = function (Vue, options={}) {
  if (install.installed) return;
  Object.keys(Components).forEach((name) => {
    Vue.component(name, Components[name])
  })
  Vue.prototype.$list = List
  Vue.prototype.$findParent = findParent
  let validator = new Validator(options.validatorOptions)
  Vue.prototype.$validator = validator
  Vue.prototype.$fileupload = fileupload
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}
// window.VueScrollTo = VueScrollTo;

export default {
  install,
  ...Components
}