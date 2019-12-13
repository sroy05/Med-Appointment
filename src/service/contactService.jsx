
const baseUrl='localhost:8080';

export function getAllContact(){
    return new Promise((resolve,request)=>{
        request({
            method:'GET',
            url:{baseUrl}+ '/StudentApi/contactAll',
            headers:{
                'Access-Control-Allow-Origin': '*',
                'Content-Type':'application/json',
                Accept:'application/json'
            },
            mode:cors,
            proxy: {
                host: '10.247.162.117',
                port: 3000
              }
        }).then((response)=>{
            if(response.status===200){
                resolve(response.data)
            }
            reject(response);
        })
    }).catch((err) =>{

        if(err.response.status===403){
            resolve({
                message:'UNauthorize access',
                status:403
            }
            )
        }
        resolve({
            message: err.response.data.message,
            status:err.response.status
        })
    })

};

export function addStudents(studentData){
    const payload={
        data:studentData
    }
    return new Promise((resolve,request)=>{
        request({
            method:'POST',
            data: payload,
            url:{baseUrl}+ '/StudentApi/addStudents',
            headers:{
                'Access-Control-Allow-Origin': '*',
                'Content-Type':'application/json',
                Accept:'application/json'
            },
            mode:cors,
            proxy: {
                host: '10.247.162.117',
                port: 3000
              }
        }).then((response)=>{
            if(response.status===200){
                resolve(response.data)
            }
            reject(response);
        })
    }).catch((err) =>{

        if(err.response.status===403){
            resolve({
                message:'UNauthorize access',
                status:403
            }
            )
        }
        resolve({
            message: err.response.data.message,
            status:err.response.status
        })
    })
}