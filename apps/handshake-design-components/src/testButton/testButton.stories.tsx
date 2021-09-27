import { Story, Meta } from '@storybook/react';
import { TestButton } from './testButton';

export default {
  component: TestButton,
  title: 'TestButton',
} as Meta;

const Template: Story<any> = (args) => <TestButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
