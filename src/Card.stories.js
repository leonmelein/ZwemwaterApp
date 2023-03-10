import 'bootstrap/dist/css/bootstrap.css';
import Card from "./Card"

export default {
    title: 'Card',
    component: Card
};

const Template = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {};
