const dollBtn = document.getElementById('doll')
const euroBtn = document.getElementById('euro')
const chinBtn = document.getElementById('chin')
const yaponBtn = document.getElementById('yapon')
const tenBtn = document.getElementById('list')
const val = document.getElementById('exampleInputEmail1')
const group = document.getElementById('group')


dollBtn.onclick = function(res){
    res = val.value * 88.21
    group.textContent = res
    // group.insertAdjacentHTML('beforeend', vivodGruppi(res))

}    
chinBtn.onclick = function(res){
    res = val.value * 7.27
    group.textContent = res
}    
yaponBtn.onclick = function(res){
    res = val.value * 159.84
    group.textContent = res
}    
tenBtn.onclick = function(res){
    res = val.value * 463.85
    group.textContent = res
}    
euroBtn.onclick = function(res){
    res = val.value * 0.93475
    group.textContent = res
    // group.insertAdjacentHTML('beforeend', vivodGruppi(res))

}    
