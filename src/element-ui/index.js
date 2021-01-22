import {Loading, Message, MessageBox, Notification} from 'element-ui'
import ElementUI from 'element-ui'
import Vue from 'vue'

Vue.use(ElementUI)
Vue.use(Loading.directive)

Vue.prototype.$loading = Loading.service
Vue.prototype.$msgbox = MessageBox
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$prompt = MessageBox.prompt
Vue.prototype.$notify = Notification
Vue.prototype.$message = Message

Vue.prototype.$ELEMENT = {size: "medium"}
