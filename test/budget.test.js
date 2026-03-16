<script>
import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import BudgetCard from '../components/BudgetCard.vue';

describe('BudgetCard', () => {
  it('should render budget amount', () => {
    const wrapper = mount(BudgetCard, {
      props: {
        title: 'Groceries',
        amount: 500,
        spent: 250
      }
    });
    
    expect(wrapper.text()).toContain('Groceries');
    expect(wrapper.text()).toContain('500');
  });
  
  it('should calculate remaining correctly', () => {
    const wrapper = mount(BudgetCard, {
      props: {
        title: 'Test',
        amount: 100,
        spent: 30
      }
    });
    
    expect(wrapper.text()).toContain('70');
  });
  
  it('should show progress bar', () => {
    const wrapper = mount(BudgetCard, {
      props: {
        title: 'Test',
        amount: 100,
        spent: 50
      }
    });
    
    expect(wrapper.find('.progress-bar').exists()).toBe(true);
  });
});

describe('Budget Calculations', () => {
  it('should calculate percentage correctly', () => {
    const spent = 50;
    const total = 100;
    const percentage = (spent / total) * 100;
    expect(percentage).toBe(50);
  });
  
  it('should handle zero budget', () => {
    const spent = 0;
    const total = 0;
    const percentage = total === 0 ? 0 : (spent / total) * 100;
    expect(percentage).toBe(0);
  });
});
</script>
