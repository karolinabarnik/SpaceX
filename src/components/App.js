export const App = () => {
    return (
      <div>
        <AppHeader />
        <main className="ui main text container">
          <ContactsList contacts={[]} />
        </main>
      </div>
    );
  };