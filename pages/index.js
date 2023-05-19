import React, { useEffect, useContext, useState } from "react";

import { CrowdFundingContext } from "@/Context/CrowdFunding";
import { Hero, Card, PopUp } from "../Components/index";


const index = () => {
  const {
    titleData,
    getCampaigns,
    createCampaign,
    donate,
    getUserCampaigns,
    getDonations,
  } = useContext(CrowdFundingContext);

  const [allcampaign, setAllCampaign] = useState();
  const [usercampaign, setUserCampaign] = useState();

  useEffect(() => {
    const getCampaignsData = getCampaigns();
    const userCampaignData = getUserCampaigns();
    return async () => {

      const allData = await getCampaignsData;
      
      const userData = await userCampaignData;
      setAllCampaign(allData);
      setUserCampaign(userData);
      console.log(userData);
    };

  }, []);


  //donation open model

  const [openModel, setOpenModel] = useState(false);
  const [donateCampaign, setDonateCampaign] = useState();

  console.log(donateCampaign);
  return (
    <>
      <Hero titleData={titleData} createCampaign={createCampaign} />
      <Card title="All listed campaigns"
        allcampaign={allcampaign}
        setOpenModel={setOpenModel}
        setDonate={setDonateCampaign}
      />
      <Card title="Your Created campaign"
        allcampaign={usercampaign}
        setOpenModel={setOpenModel}
        setDonate={setDonateCampaign}
      />
      {openModel && (
        <PopUp
          setOpenModel={setOpenModel}
          getDonations={getDonations}
          donate={donateCampaign}
          donateFunction={donate}
        />
      )}
    </>
  );
};


export default index;