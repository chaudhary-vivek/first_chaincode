/*
 * Copyright IBM Corp. All Rights Reserved.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

'use strict';

const { Contract } = require('fabric-contract-api');

class FabCar extends Contract {
    //1 initLedger deploy chaincode looks for this method. we may even leave this empty!!
    //2 writeData
    //3 readData

    async initLedger(ctx){
        await ctx.stub.putState("test", "Hello world!") //putState stores values in key value pairs
        return "success"
    }

    async writeData(ctx, key, value){
        await ctx.stub.putState(key, value)
        return value;
    }

    async readData(ctx, key){
        var response = await ctx.stub.getState(key);
        return response.toString()
    }
}

module.exports = FabCar;
