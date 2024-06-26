const dollBtn = document.getElementById('doll')
const euroBtn = document.getElementById('euro')
const chinBtn = document.getElementById('chin')
const yaponBtn = document.getElementById('yapon')
const tenBtn = document.getElementById('list')
const val = document.getElementById('exampleInputEmail1')
const group = document.getElementById('group')


dollBtn.onclick = function(res){
    res = val.value * 0.011458
    group.textContent = res
    // group.insertAdjacentHTML('beforeend', vivodGruppi(res))

}    
chinBtn.onclick = function(res){
    res = val.value * 0.08467
    group.textContent = res
}    
yaponBtn.onclick = function(res){
    res = val.value * 1.83
    group.textContent = res
}    
tenBtn.onclick = function(res){
    res = val.value * 5.33
    group.textContent = res
}    
euroBtn.onclick = function(res){
    res = val.value * 0.010668
    group.textContent = res
    // group.insertAdjacentHTML('beforeend', vivodGruppi(res))

}    