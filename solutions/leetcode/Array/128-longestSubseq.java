class Solution {
    public int longestConsecutive(int[] nums) {
        Set numSet = new HashSet();
        int currentnum ;
        int currentlength;
        int longestseq = 0;
        for(int num :nums)
        {
            numSet.add(num);
        }
        for(int num:nums){
            if(!numSet.contains(num-1))
            {
                currentnum = num;
                currentlength= 0;
                while(numSet.contains(currentnum+1))
                {
                    currentnum++;
                    currentlength++;
                }
                longestseq = Math.max(longestseq,currentlength);
            }
        }
        return longestseq+1;
    }

}