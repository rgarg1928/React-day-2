import React from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import Card from "./components/Card";

const App = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Day 2 — Reusable Components UI</h1>

      {/* Alerts */}
      <Alert type="success">This is a success alert!</Alert>
      <Alert type="warning">This is a warning alert!</Alert>
      <Alert type="error">This is an error alert!</Alert>

      {/* Buttons */}
      <Button label="Primary Button" type="primary" />
      <Button label="Secondary Button" type="secondary" />
      <Button label="Danger Button" type="danger" />

      {/* Cards */}
      <Card title="Card 1">
        <p>This is content inside Card 1.</p>
      </Card>

      <Card title="Card 2">
        <p>Another card with different content.</p>
      </Card>
    </div>
  );
};

export default App;
