// Trasladar LOGICA a nuestro SW principal:

    // Funcion para guardar en el cache dinamico:
    function actualizaCacheDinamico(dynamicCache, req, res){

        if (res.ok) {
            return caches.open(dynamicCache).then( cache =>{
               
                cache.put(req, res.clone());

                return res.clone();
            });
        
        }else{
            return res;
        }

    }