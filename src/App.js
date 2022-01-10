import React from 'react';
import styles from 'App.scss';

class App extends React.Component {
  render() {
    return (
      <><header className={styles.body}>
        <h1 className={styles.navigation}><img src="/src/styles/Vector.png" alt="SpaceX"></></h1>
        <h1 className={styles.navigation2}><img src="/src/styles/Vector1.png" alt="SpaceX"></></h1>
        <div className={styles.arrowed}>
          <div className={styles.arrowleft}></div>
          <div className={styles.arrowright}></div>
        </div>
        <div className={styles.rectangle}></div>
        <main className={styles.information}>
          <div className={styles.mission} id="app">
            <h2 className={styles.info}> MISSION</h2>
            <h2 className={styles.launch}>LAUNCH DATE</h2>
          </div>
          <div className={styles.mission}>
            <p className={styles.starlink} />"&gt;Starlink-12 (v1.0)</p>
          <p className={styles.date} />">24 Jan 2021</p>
      </div><div className={styles.missionsecond}>
          <h2 className={styles.rocket}>ROCKET</h2>
          <h2 className={styles.launchsite}>LAUNCH SITE</h2>
          <div className={styles.kennedyspace}>
            <div className={styles.rectangle4}></div>
            <p className={styles.kennedy}>Kennedy Space Center Historic Launch Complex 39A</p>
          </div>
        </div><div className={styles.missionsecond}>
          <p className={styles.falcon}>Falcon 9</p>
          <p className={styles.recovered}>RECOVERED</p>
          <p className={styles.site}>KSC LC 39A</p>
        </div><div className={styles.missionbutton}>
          <div className={styles.rectangle3}>
            <a className={styles.btn} href="#">LEARN MORE</a>
          </div>
        </div></>
              </main>
              <section className={styles.rescueships}>
                <div className={styles.rectangle2}></div>
                <h2 className={styles.rescue}>RESCUE SHIPS</h2>
                <div className={styles.rectangle1}>
                    <section className={styles.ship1}>
                        <img src="/src/styles/image2.png" alt="ship" className={styles.iGships}/>
                        <p className={styles.gotree}>GO Ms Tree</p>
                        <div className={styles.rectangle6}></div>
                        <div className={styles.portinfo}>
                            <p className={styles.homeport1>HOME PORT WEIGHT[KG]</p>
                            <p className={styles.portcanaveral1}>Port Canaveral <br>449964</p>
                        </div>
                    </section>
                </div>
                <><div className={styles.rectangle9}>
                    <section className={styles.ship2}>
                      <img src="/src/styles/image3.png" alt="ship" className={styles.imgships} />
                      <p className={styles.gotree2}>GO Ms Chief</p>
                      <div className={styles.rectangle10} />
                      <div className={styles.portinfo}>
                        <p className={styles.homeport2}> HOME PORT WEIGHT[KG]</p>
                        <p className={styles.portcanaveral2}>Port Canaveral <br>449964</></p>
                      </div>
                    </section>
                  </div><div className={styles.rectangle11} />
                    <section className={styles.ship3}>
                        <img src="src/styles/image4.png" alt="ship" className={styles.imgships}>
                        <><p className={styles.gotree3}>Just Read The Instructions 2</p>
                        <div className={styles.rectangle12}></div>
                        <div className={styles.portinfo}>
                          <p className={styles.homeport3}>HOME PORT WEIGHT[KG]</p>
                          <p className={styles.portcanaveral3}>Port Canaveral <br>449964/>
                      </div></></>    
                    </section>
                </div>    
          </section> 
    </header>
    )
  }
  }

export default App;
