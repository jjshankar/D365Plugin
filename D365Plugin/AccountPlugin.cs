﻿using Microsoft.Xrm.Sdk;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SF365.D365Plugin
{
    [CrmPluginRegistration(MessageNameEnum.Update, 
        "account", 
        StageEnum.PreOperation, 
        ExecutionModeEnum.Synchronous, 
        "name", 
        "Pre-Update Account", 
        1000, 
        IsolationModeEnum.Sandbox,
        Image1Name = "PreImage", 
        Image1Type = ImageTypeEnum.PreImage, 
        Image1Attributes = "name")]
    public class AccountPlugin : PluginBase
    {
        public AccountPlugin() : base(typeof(AccountPlugin))
        {

        }

        protected override void ExecuteCrmPlugin(LocalPluginContext localcontext)
        {
            throw new InvalidPluginExecutionException("Work in progress...");
        }
    }
}
