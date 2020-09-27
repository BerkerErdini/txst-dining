import React from "react";
import { Image, List } from "semantic-ui-react";
import { Header } from "semantic-ui-react";

const Meals = (props) => {
  return (
    <div>
      <Header as="h3">{props.meal}</Header>
      <List selection verticalAlign="middle">
        <List.Item style={{}}>
          <List.Content>
            <List.Header>
              <i class="food icon" style={{ color: "goldenrod" }}></i>
              {props.foodOne}
              <i class="food icon" style={{ color: "maroon" }}></i>
            </List.Header>
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Content>
            <List.Header>
              <i class="food icon" style={{ color: "maroon" }}></i>
              {props.foodTwo}
              <i class="food icon" style={{ color: "goldenrod" }}></i>
            </List.Header>
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Content>
            <List.Header>
              <i class="food icon" style={{ color: "goldenrod" }}></i>
              {props.foodThree}
              <i class="food icon" style={{ color: "maroon" }}></i>
            </List.Header>
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Content>
            <List.Header>
              <i class="food icon" style={{ color: "maroon" }}></i>
              {props.foodFour}
              <i class="food icon" style={{ color: "goldenrod" }}></i>
            </List.Header>
          </List.Content>
        </List.Item>
      </List>
      <br />
    </div>
  );
};

export default Meals;
