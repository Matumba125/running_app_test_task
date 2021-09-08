import {SwaggerTestAPI} from "./api";

test('testing get method', ()=>{
    SwaggerTestAPI.testingGet()
        .finally((res)=>{
            expect(res.status).toEqual(200)
            expect(res.config.method).toEqual('get')
        })
})
test('testing put method', ()=>{
    SwaggerTestAPI.testingPut()
        .finally((res)=>{
            expect(res.status).toEqual(200)
            expect(res.config.method).toEqual('put')
        })
})
test('testing post method', ()=>{
    SwaggerTestAPI.testingPost()
        .finally((res)=>{
            expect(res.status).toEqual(200)
            expect(res.config.method).toEqual('post')
        })
})
test('testing delete method', ()=>{
    SwaggerTestAPI.testingDelete()
        .finally((res)=>{
            expect(res.status).toEqual(200)
            expect(res.config.method).toEqual('delete')
        })
})