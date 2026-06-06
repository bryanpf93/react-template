import React from "react";

import { Card } from "./components/Card";
import { useTodoList } from "./hooks/useTodoList";
import { PokemonItem } from "./types/TodoItem";

export const ListApp = (): React.JSX.Element => {
  const { items, loading, fetchData, error } = useTodoList();

  React.useEffect(() => {
    fetchData();
  }, []);

  const renderContent = () => {
    if (loading) {
      return <p className="text-gray-600">Loading...</p>;
    }

    if (error || !items) {
      return (
        <div>
          <p className="text-red-600">Error loading items.</p>
          <button onClick={() => fetchData()}>Retry</button>
        </div>
      );
    }

    if (items.length === 0) {
      return <p className="text-gray-600">No items found.</p>;
    }

    return items.map((item) => (
      <Card
        key={item.id}
        text={item.text}
        description={item.description}
        likes={item.numberLikes}
        onClick={() => {
          // navegar al detalle de Todo
        }}
      />
    ));
  };

  const pokemonItems: PokemonItem[] = [];

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">List App</h1>

      <section className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Todo Items</h2>
        {renderContent()}
      </section>

      <section className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Pokemon Items</h2>
        {/* Aquí podrías agregar otro componente similar a Card para mostrar los Pokémon */}
        {pokemonItems.map((item) => (
          <Card
            key={item.id}
            text={item.name}
            description={item.type}
            likes={item.likes}
            onClick={() => {
              // navegar al detall de Pokemon
            }}
          />
        ))}
      </section>
    </div>
  );
};

// MEJORAS
// TESTING: JEST + REACT TESTING LIBRARY
// - CONTROLAR EMPTY STATE, ERROR Y LOADING DE API
// - AGREGAR CUSTOM HOOKS
// - NO PASAR TODO LO DE API AL COMPONENTE
// - NO ACOPLAR LA RESPUESTA DE API A LA VISTA, TENERLO CENTRALIZADO EN UN MAPPER

// --components
// ---- Card.tsx
// ---- Header.tsx
// --views
// -----profile
// --------components
// -------------HeaderProfile.tsx
// --------ProfileView.tsx
// -----details
// --------components
// -------------CardDetails.tsx
// -------------HeaderDetail.tsx
// --------DetailView.tsx
// -----list
// --------hooks
// ----------useTodoList.ts
// --------components
// --------------HeaderList.tsx
// --------ListView.tsx

// const Header = ({ title,  buttonText, onButtonClick }: { title: string; buttonText?: string; onButtonClick?: () => void }) => {
//   return (
//     <header className="bg-gray-800 text-white p-4 w-full">
//       <h1 className="text-3xl font-bold">{title}</h1>
//       { buttonText &&  <button onClick={onButtonClick}>{buttonText}</button>}
//     </header>
//   );
// };

// <Header title="List App" />
// const HeaderList = () => {
//   return (
//     <header className="bg-blue-500 text-white p-4 w-full">
//       <h1 className="text-3xl font-bold">List App</h1>
//     </header>
//   );

// // <Header title="Detail View"  buttonText="Add Favourite" onClick={() => {}} />
// const HeaderDetail = () => {
//   return (
//     <header className="bg-green-500 text-white p-4 w-full">
//       <h1 className="text-3xl font-bold">Detail View</h1>
//       <button>Add Favourite</button>
//     </header>
//   );
// };

// // <Header title="Profile View"  buttonText="Logout" onClick={() => {}} />
// const HeaderProfile = () => {
//   return (
//     <header className="bg-purple-500 text-white p-4 w-full">
//       <h1 className="text-3xl font-bold">Profile View</h1>
//       <button>Logout</button>
//     </header>
//   );
// };
