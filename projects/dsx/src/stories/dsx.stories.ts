import type { Meta, StoryObj } from '@storybook/angular';
import { DsxComponent } from '../public-api';


const meta: Meta<DsxComponent> = {
  title: 'Example/Page',
  component: DsxComponent,
};

export default meta;
type Story = StoryObj<DsxComponent>;

export const LoggedOut: Story = {};
