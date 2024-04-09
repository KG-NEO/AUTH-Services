import type IPost from "@/interface/IPost";
import { ref } from "vue";
import type { Ref } from "vue";



// AQUI DECLARAS Y EXPORTAS LAS CLASES
export default class PostService{
    //MIS DATOS QUE SEAN REACTIVOS
    private users: Ref<IPost[]>
    private user: Ref<IPost>
    private url = 'https://utcancun.a.pinggy.online'

    //AQUI VA INICIAR TUS DATOS QUE TIENES
    constructor() {
        this.users = ref([])
        this.user = ref({}) as Ref<IPost>
    }
    // AQUI VIENE LOS GET PARA OBTENER LA INFORMACIÓN
    getUsers(): Ref<IPost[]>{
        return this.users
    }
    getUser(): Ref<IPost>{
        return this.user
    }

    // OBTENER LOS DATOS DE LOS USUARIOS CON ALERTA DE ERROR
    async obtenerUsers(): Promise<void> {
        try {
            const respuesta = await fetch(this.url + '/Users', {
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                  },
                })
                const resultado = await respuesta.json()
                console.log(resultado);
         
                this.users.value = resultado
            } catch (error) {
                console.error('Hubo un Error al obtener la lista de Usuarios' + error)
            }
       }

       // OBTENER LOS DATOS DE UN USUARIO CON SU ALERTA DE ERROR
       async obtenerUser(correo: string,name:string,grupo:string): Promise<void> {
        try {
            console.log(correo);
            
            const respuesta = await fetch(this.url + '/user?email=' + correo +'&name=' + name + '&group=' + grupo )
            const resultado: IPost = await respuesta.json()
            console.log(resultado);
    
            this.user.value = resultado
        } catch (error) {
            console.error('Hubo un Error al obtener el usuario' + error);
        }
   }
 
   // OBTENER LOS DATOS DEL REGISTRO DE USUARIO 
   async Registro(nombre: string, grupo: string, correo: string, contra:string) {

    const register = {
        "name": nombre,
        "user_gruop": grupo,
        "email": correo,
        "password": contra
    }

    const respuesta = await fetch(this.url + '/Register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(register)
    } )
    const resultado = await respuesta.json()
    console.log(resultado);
}


}