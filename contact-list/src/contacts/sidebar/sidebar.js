import React from "react";

const SideBar = ({List}) => {
  
  let family = 0;
  let work = 0;
  let friends = 0;
  let private_ = 0;

  const item = List.map(contact => {
    
    switch(contact.category)
    {
      case "Work": 
        work+=1;
        break;

      case "Family": 
        family +=1;
        break;

      case "Private":  
        private_ +=1;
        break;
      
      case "Friends":  
        friends +=1;
        break; 
    }
    
  });
  console.log("item: ", item);
  
  return (
    <div className="col-lg-3 col-md-4 col-sm-12">
      <div className="contacts-labels">
        <div className="title">
          All contacts<span>{List.length}</span>
        </div>
        <div className="list">
          <div className="head">Categories</div>
          <div className="unit">
            <div className="lab lab-success">Work</div>
            <span>{work}</span>
          </div>
          <div className="unit">
            <div className="lab lab-primary">Family</div>
            <span>{family}</span>
          </div>
          <div className="unit">
            <div className="lab lab-danger">Private</div>
            <span>{private_}</span>
          </div>
          <div className="unit">
            <div className="lab lab-warning">Friends</div>
            <span>{friends}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;