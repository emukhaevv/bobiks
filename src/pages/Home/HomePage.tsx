import { IonPage } from "@ionic/react";
import Item from "./components/Item/Item";
import { items } from "./utils";
import cl from "./index.module.css";

const HomePage = () => {
  return (
    <IonPage>
      <div className={cl.Content}>
        {items.map(({ title, description }) => (
          <Item title={title} description={description} />
        ))}
      </div>
    </IonPage>
  );
};

export default HomePage;
