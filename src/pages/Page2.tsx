import { IonButtons, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar }from'@ionic/react';

const Page2: React.FC =()=>{
  return(
    <IonPage>
        <IonHeader>
          <IonToolbar>

              <IonButtons slot="start">
                  <IonMenuButton></IonMenuButton>
              </IonButtons> 

            <IonTitle>Page 2</IonTitle>
          </IonToolbar>
        </IonHeader>
    </IonPage>
  );
};

export default Page2;
