import { AzureFunction, Context } from '@azure/functions'
import * as sh from 'shelljs'
import axios from 'axios';

const sleep = (milliseconds: number) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}


const hitApi: AzureFunction = async function (context: Context, myTimer: any): Promise<void> {
    if (myTimer.IsPastDue) {
        context.log('Timer function is running late!');
    }

    context.log(sh.exec('curl https://ahmels-hourly-cold-start-ea-python-100k-1.azurewebsites.net/api/httptrigger').stdout)
    context.log(sh.exec('curl https://ahmels-hourly-cold-start-wus-python-100k-1.azurewebsites.net/api/httptrigger').stdout)
    context.log(sh.exec('curl https://ahmels-hourly-cold-start-weu-python-100k-1.azurewebsites.net/api/httptrigger').stdout)

    context.log(sh.exec('curl https://ahmels-hourly-cold-start-ea-python-100mb-1.azurewebsites.net/api/httptrigger').stdout)
    context.log(sh.exec('curl https://ahmels-hourly-cold-start-wus-python-100mb-1.azurewebsites.net/api/httptrigger').stdout)
    context.log(sh.exec('curl https://ahmels-hourly-cold-start-weu-python-100mb-1.azurewebsites.net/api/httptrigger').stdout)

    context.log(sh.exec('curl https://ahmels-hourly-cold-start-ea-python-1gb-1.azurewebsites.net/api/httptrigger').stdout)
    context.log(sh.exec('curl https://ahmels-hourly-cold-start-wus-python-1gb-1.azurewebsites.net/api/httptrigger').stdout)
    context.log(sh.exec('curl https://ahmels-hourly-cold-start-weu-python-1gb-1.azurewebsites.net/api/httptrigger').stdout)
};

export default hitApi;
