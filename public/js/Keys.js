var fuerza = 0.3;
/**
 * @type {Key[]}
 */
var keys = [];

/**
 * 
 * @param {KeyboardEvent} e 
 */
function key_on(e)
{

    let key = e.key.toLowerCase();

    let k = keys.find(n => n.key == key);

    if(key == 'x')
    {
        is_active = !is_active;
    }

    if(k)
    {

    }
    else
    {
        keys.push(new Key(key));
    }
    
}
/**
 * 
 * @param {KeyboardEvent} e 
 */
function key_off(e)
{
    //console.log(`key off: ${keys}`);
    let key = e.key.toLowerCase();
    let predicado = n => n.key == key;
    let f = keys.find(predicado);
    
    if(f)
    {
        RemoveUpdate(f);
        keys = keys.REMOVE_ALL(predicado);
    }
    else
    {

    }
    
}
class Key extends Interfaz
{
    /**
     * 
     * @param {string} key 
     */
    constructor(key)
    {
        super();
        this.key = key;
        AddUpdate(this);
    }
    Update()
    {
        if(is_active)
        {

        }
        else
        {
            return;
        }


        let key = this.key;
        let add_force = new Vector3(0,0,0);

        if(key == "z")
        {
            add_force.y = fuerza;
        }
        if(key == " ")
        {
            add_force.y = -fuerza;
        }
        if(key == "w")
        {
            add_force.z = -fuerza;
        }
        if(key == "s")
        {
            add_force.z = fuerza;
        }
        if(key == "a")
        {
            add_force.x = -fuerza;
        }
        if(key == "d")
        {
            add_force.x = fuerza;
        }

        let q = mover.force.AddFuerzaLocal(add_force, rotar);
        //console.log(`${this.key} : key on: ${q.arranque}`);
    }
}