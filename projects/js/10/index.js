console.log("project 10");
let parametersBox = document.getElementById('parametersBox');
parametersBox.style.display = 'none';
let pr1 = document.getElementById('pr1');
pr1.addEventListener('click', () => {
    document.getElementById('requestJsonBox').style.display = 'none';
    document.getElementById('parametersBox').style.display = 'block';

})
let jr1 = document.getElementById('jr1');
jr1.addEventListener('click', () => {
    document.getElementById('requestJsonBox').style.display = 'block';
    document.getElementById('parametersBox').style.display = 'none';

})

let addParam = document.getElementById('addParam');
let html = '';
addParam.addEventListener('click', () => {
    html += `<div class="form-row row my-3">
    <label for="url" class="col-sm-2 col-form-label">Parameter 1</label>
    <div class="col-md-4">
        <input type="text" class="form-control" id="parameterKey1" placeholder="Enter Parameter 1 Key">
    </div>
    <div class="col-md-4">
        <input type="text" class="form-control" id="parameterValue1" placeholder="Enter Parameter 1 Value">
    </div>
    <button id="addParam" class="btn btn-primary col-md-1">+</button>
</div>`;
    let params = document.getElementById('params');
    params.innerHTML = html;
})