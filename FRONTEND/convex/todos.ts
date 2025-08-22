import { Text } from 'react-native';
import { createContext } from 'react';
import { mutation, query } from "./_generated/server";
import {v} from 'convex/values';
export const getTodos = query({
    handler: async (ctx) => {
        const todos = await ctx.db.query("todos").order("desc").collect();
        return todos;
    }
});

export const createtodos = mutation({});
export const createtodos = mutation({});


export const addtodos = mutation({
    
    args:{Text:v.string()},
    handler: async (ctx,args) =>{
        const todoid= ctx.db.insert("todos",{
            text: args.Text,
            iscomplete:false,
        });
        return todoid;
    },
});

