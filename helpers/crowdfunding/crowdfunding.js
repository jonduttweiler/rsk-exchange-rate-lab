

async function getAllEntities(crowdfunding){
    console.log(" --- Dacs ---")
    const dac_ids = await crowdfunding.getDacIds();
    
    for(let _id of dac_ids){
        const dac = await crowdfunding.getDac(_id);
        console.log(dac)
    }

    console.log(" --- Campaigns ---")
    const campaign_ids = await crowdfunding.getCampaignIds();
    
    for(let _id of campaign_ids){
        const campaign = await crowdfunding.getCampaign(_id);
        console.log(campaign)
    }

    console.log(" --- Milestones ---")
    const milestone_ids = await crowdfunding.getMilestoneIds();
    
    for(let _id of milestone_ids){
        const milestone = await crowdfunding.getMilestone(_id);
        console.log(milestone)
    }

}

module.exports = { getAllEntities }