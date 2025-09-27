import { create } from 'zustand'
import type { ICandidate } from '../types/interfaces'


interface IStore {
  candidateList: Map<number, ICandidate>;
  addCandidate: (candidate: ICandidate) => void;
  setCurrentCandidate: (candidate: ICandidate) => void;
  updateCurrentCandidate: (updates: Partial<ICandidate>) => void;

  getAllCandidates: () => Map<number, ICandidate>;
  getCandidate: (id: number) => ICandidate;
}