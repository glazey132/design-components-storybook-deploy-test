import { Story, Meta } from '@storybook/react';
import { TestHeader } from './testHeader';

export default {
  component: TestHeader,
  title: 'TestHeader',
} as Meta;

const Template: Story<any> = (args) => <TestHeader {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
