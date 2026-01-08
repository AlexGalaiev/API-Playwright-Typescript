
import {z} from "zod"

export const paymentMethods = (id:number,key: string,fsa: boolean, nm: boolean, adgm: boolean, za: boolean, es: boolean) =>{
    return z.object({
            "id": z.literal(id),
            "internal_name": z.literal(key),
            "show_on_fsa": z.literal(fsa),
            "show_on_nm": z.literal(nm),
            "show_on_adgm": z.literal(adgm),
            "show_on_za": z.literal(za),
            "show_on_nm_es": z.literal(es),
            "icon":z.object({
                "id": z.number(),
                "name": z.string(),
                "alternativeText": z.string(),
                "url": z.url(),
                "width": z.number(),
                "height": z.number(),
                "formats": z.null()
        })
    })
}

export const productVericalsSchema = (id: number, key:string, fsa: boolean, nm: boolean, adgm: boolean, za: boolean)=>{
    return z.object({
        "id": z.literal(id),
        "key": z.literal(key),
        "name": z.string(),
        "coming_soon": z.boolean(),
        "url": z.string(),
        "display_on_fsa": z.literal(fsa),
        "display_on_nm": z.literal(nm),
        "display_on_adgm": z.literal(adgm),
        "display_on_za": z.literal(za)
})
}