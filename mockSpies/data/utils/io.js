import {promises as fs} from "fs"
import path from "path"

export  function saveTokenToFile(data,filePath){
    const storePath=path.join(process.cwd(),"data",filePath)
    return  fs.writeFile(storePath,data)
}