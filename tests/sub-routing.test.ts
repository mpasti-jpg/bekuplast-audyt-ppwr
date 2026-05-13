import { beforeEach, describe, expect, it } from "vitest";
import { useAuditStore } from "@/store/audit-store";

describe("Q1a sub-routing", () => {
  beforeEach(() => {
    useAuditStore.getState().reset();
  });

  it("user wybierający ecommerce_b2c widzi Q1a", () => {
    const store = useAuditStore.getState();
    store.startNewAudit();
    store.setAnswer("Q1", "ecommerce_b2c");
    store.next();
    expect(useAuditStore.getState().currentStep).toBe(1.5);
  });

  it("user wybierający automotive pomija Q1a", () => {
    const store = useAuditStore.getState();
    store.startNewAudit();
    store.setAnswer("Q1", "automotive");
    store.next();
    expect(useAuditStore.getState().currentStep).toBe(2);
    expect(useAuditStore.getState().industrySubRoute).toBeNull();
  });

  it("Q1a B2B zmienia industry na ecommerce_b2b", () => {
    const store = useAuditStore.getState();
    store.startNewAudit();
    store.setAnswer("Q1", "ecommerce_b2c");
    store.next();
    store.setAnswer("Q1a", "b2b");
    expect(useAuditStore.getState().industry).toBe("ecommerce_b2b");
  });

  it("Q1a B2C zostawia industry ecommerce_b2c", () => {
    const store = useAuditStore.getState();
    store.startNewAudit();
    store.setAnswer("Q1", "ecommerce_b2c");
    store.next();
    store.setAnswer("Q1a", "b2c");
    expect(useAuditStore.getState().industry).toBe("ecommerce_b2c");
  });

  it("powrót z Q2 przy ecommerce wraca do Q1a", () => {
    const store = useAuditStore.getState();
    store.startNewAudit();
    store.setAnswer("Q1", "ecommerce_b2c");
    store.next();
    store.setAnswer("Q1a", "b2c");
    store.next();
    expect(useAuditStore.getState().currentStep).toBe(2);
    store.prev();
    expect(useAuditStore.getState().currentStep).toBe(1.5);
  });

  it("powrót z Q2 przy automotive wraca do Q1", () => {
    const store = useAuditStore.getState();
    store.startNewAudit();
    store.setAnswer("Q1", "automotive");
    store.next();
    store.prev();
    expect(useAuditStore.getState().currentStep).toBe(1);
  });
});
