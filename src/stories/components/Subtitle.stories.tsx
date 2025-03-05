import { Meta, StoryObj } from '@storybook/react';
import Subtitle from '@ui/common/Subtitle';

const meta: Meta<typeof Subtitle> = {
  title: 'Components/Subtitle',
  component: Subtitle,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    icon: { control: 'text' },
    iconBg: { control: 'text' },
    link: { control: 'text' },
    className: { control: 'text' },
  },
};
export default meta;

type TStory = StoryObj<typeof Subtitle>;

export const Default: TStory = {
  args: { title: 'Example Subtitle12', icon: 'flag', iconBg: 'bg-primary' },
};

export const WithLink: TStory = {
  args: {
    title: 'Go to Home',
    icon: 'note',
    iconBg: 'bg-secondary',
    link: '/',
  },
};
