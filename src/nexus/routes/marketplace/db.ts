import { Collection, Db, MongoClient } from "mongodb";

export interface ModuleInfo {
    name: string;
    id: string;
    author: string;
    version: string;
    shortDesc?: string | undefined;
    link?: string | undefined;
    platforms?: string[] | undefined;
    image?: string | undefined;
}



export class NexusDatabase {
    private client = new MongoClient(l);
    private database: Db;
    private moduleInfoCollection: Collection<ModuleInfo>;

    constructor() {
        this.database = this.client.db('nexus-modules');
        this.moduleInfoCollection = this.database.collection<ModuleInfo>('modules');
    }

    public async getAllModules() {
        return await this.moduleInfoCollection.find();
    }




}


