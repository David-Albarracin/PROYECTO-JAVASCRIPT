import './../app/main/header.js'
import './../app/main/sidebar.js'
import './../app/main/content.js'

import './../app/components/addComponent.js'
import './../app/components/assignationComponent.js'
import './../app/components/delComponent.js'
import './../app/components/editComponent.js'
import './../app/components/searchComponent.js'
import './../app/components/tableComponent.js'

import { jsonService } from '../app/components/jsonService.js'

document.addEventListener('DOMContentLoaded', () => {
    jsonService.loadData('activos')
})