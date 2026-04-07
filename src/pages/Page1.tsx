import { IonButtons, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar }from'@ionic/react';

const Page1: React.FC =()=>{
  return(
    <IonPage>
        <IonHeader>
          <IonToolbar>

              <IonButtons slot="start">
                <IonMenuButton></IonMenuButton>
              </IonButtons>

            <IonTitle>Page 1</IonTitle>
          </IonToolbar>
        </IonHeader>
    </IonPage>
  );
};

export default Page1;

