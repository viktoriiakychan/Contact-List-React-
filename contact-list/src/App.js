import "./App.css";

// Import components
import SideBar from "./contacts/sidebar/sidebar";
import ContactList from "./contacts/contact-list/contact-list";
import React from "react";
import { slice } from "lodash";
import { Route, Routes } from "react-router-dom";
import Header from "./contacts/header/header";
import AddContact from "./contacts/addContacts/addContact";


class App extends React.Component {
  state = {
    List: [
      {
        id: 1,
        name: "Alexander Verdnam",
        phone: "+1-800-600-9898",
        email: "alex@email.com",
        avatar:  10,
        category: "Friends",
        gender: "male",
      },
      {
        id: 2,
        name: "Emma Watson",
        phone: "+8-800-321-1234",
        email: "emma@email.com",
        avatar: 23,
        category: "Private",
        gender: "female",

      },
      {
        id: 3,
        name: "Bill Watson",
        phone: "+8-800-321-1234",
        email: "bill@email.com",
        avatar: 88,
        category: "Private",
        gender: "male",
      },
    ],
  };

  onDelete = (id) => {
    const { List } = this.state;
    const index = List.findIndex((el) => el.id === id);
    let tmpList = slice(List);
    const tmpListPart1 = tmpList.slice(0, index);
    const tmpListPart2 = tmpList.slice(index + 1);
    tmpList = [...tmpListPart1, ...tmpListPart2];

    this.setState({
      List: tmpList,
    });
  };

  render() {
    const { List } = this.state;
    return (
      <div className="container bootstrap snippets bootdeys bootdey">
          <div className="row decor-default">
          <SideBar List={List} /> {/* if it is outside the tag Routes it means that sidebar will always be there. So in this case we don't want to change it, we only want to change the contact-list */}
          <div className="col-lg-9 col-md-8 col-sm-12">
          <div className="contacts-list">
            <Header />
            <Routes>
                <Route 
                    path = "/"
                    element={<ContactList List={List} onDelete={this.onDelete} />}
                  />
                  <Route path="/add-contact" element={<AddContact/>}/>
            </Routes>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
