import { renderHook } from "@testing-library/react";
import { useFormat } from "../hooks/use-format";
import { useTranslation } from "react-i18next";

jest.mock("react-i18next", () => ({
  useTranslation: jest.fn(() => ({
    i18n: {
      language: "en",
    },
  })),
}));

describe("deve passar por todos os 3 ciclos estipulados", () => {
    it("deve exibir 4.7 hours para 16920 segundos", () => {
        const playTimeInSeconds = 16920;
        const { result } = renderHook(() => useFormat());
        
        expect(result.current.formatNumber(playTimeInSeconds / 3600)).toBe("4.7");
    });

    it("deve exibir 1.2 hours para 4320 segundos", () => {
        const playTimeInSeconds = 4320;
        const { result } = renderHook(() => useFormat());
        
        expect(result.current.formatNumber(playTimeInSeconds / 3600)).toBe("1.2");
    });

    it("deve exibir 3.5 hours para 12600 segundos", () => {
        const playTimeInSeconds = 12600;
        const { result } = renderHook(() => useFormat());
        
        expect(result.current.formatNumber(playTimeInSeconds / 3600)).toBe("3.5");
    });

    it("deve exibir 5 hours para 18000 segundos", () => {
        const playTimeInSeconds = 18000;
        const { result } = renderHook(() => useFormat());

        expect(result.current.formatNumber(playTimeInSeconds / 3600)).toBe("5");
    });

    it("deve exibir 4 hours para 14400 segundos", () => {
        const playTimeInSeconds = 14400;
        const { result } = renderHook(() => useFormat());

        expect(result.current.formatNumber(playTimeInSeconds / 3600)).toBe("4");
    });

    it("deve exibir 20 hours para 72000 segundos", () => {
        const playTimeInSeconds = 72000;
        const { result } = renderHook(() => useFormat());

        expect(result.current.formatNumber(playTimeInSeconds / 3600)).toBe("20");
    });

    it("em pt-BR, deve usar como separador das casas decimais uma vírgula", () => {
        const mockUseTranslation = useTranslation as jest.Mock;
        mockUseTranslation.mockReturnValueOnce({
        i18n: { language: "pt-BR" },
        });

        const playTimeInSeconds = 16920;
        const { result } = renderHook(() => useFormat());

        expect(result.current.formatNumber(playTimeInSeconds / 3600)).toBe("4,7");
    });

    it("em pt-BR, deve usar como separador da casa dos milhares um ponto", () => {
        const mockUseTranslation = useTranslation as jest.Mock;
        mockUseTranslation.mockReturnValueOnce({
            i18n: { language: "pt-BR" },
        });

        const playTimeInSeconds = 5040000;
        const { result } = renderHook(() => useFormat());

        expect(result.current.formatNumber(playTimeInSeconds / 3600)).toBe("1.400");
        });
});
